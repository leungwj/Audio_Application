"use server";

import { getSession } from "./session";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getMyAudioFiles() {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        const response = await fetch(`${process.env.API_SERVER}/audio_files`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session_token.value}`
            }
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            console.log(response_data.detail);
            return { error: response_data.detail };
        }

        const audio_files = response_data.objs.map((obj: any) => JSON.parse(obj));

        return { audio_files: audio_files };

    } catch (error) {
        console.error("Error getting audio files:", error);
        return { error: "Error getting audio files. Please try again."} ;
    }
}

export async function getStreamingUrl(id: string) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }

    try {
        const response = await fetch(`${process.env.API_SERVER}/audio_files/token/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${session_token.value}`
            }
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            console.log(response_data.detail);
            return { error: response_data.detail };
        }

        return { audio_url: response_data.audio_url };

    } catch (error) {
        console.error("Error getting audio URL:", error);
        return { error: "Error getting audio URL. Please try again."} ;
    }
}

export async function createAudioFile(  prevState: string | undefined, formData: FormData) {
    const session_token = await getSession();

    if (!session_token) {
        redirect('/login');
    }
    
    try {
        const response = await fetch(`${process.env.API_SERVER}/audio_files/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${session_token.value}`
            },
            
            body: formData
        });

        const response_data = await response.json();
        
        if (!response.ok) {
            if (response.status == 422){
                return "Validation Error: Please check for incorrect or blank fields.";
            }
            return response_data.detail;
        }
        
    } catch (error) {
        console.error("Error creating new audio file:", error);
        return "Error creating new audio file. Please try again.";
    }

    revalidatePath('/dashboard/audio_files')
    redirect('/dashboard/audio_files');
}