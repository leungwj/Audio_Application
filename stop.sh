#!/bin/bash
docker compose down
docker rmi audio_application-frontend:latest
docker rmi audio_application-backend:latest