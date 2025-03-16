# Audio File Hosting Web Application

## 1. Pre-requisites

 - Docker

## 2. Running the application

### Method 1: Using bash/shell script

```bash
chmod +x start.sh
./start.sh
```

### Method 2: Use docker-compose command

```powershell
docker-compose up -d
```

## 3. Shutting down the application

### Method 1: Using bash/shell script

#### Automatically deletes built images

```bash
chmod +x stop.sh
./stop.sh
```

### Method 2: Using docker-compose command

```powershell
docker-compose down
```

## 3. Using the application

#### 1. Visit http://localhost:3000
#### 2. Click on Login
#### 3. Default Credentials are as follows:

Username: admin, Password: admin