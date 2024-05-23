pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('90ea501a-d207-4767-a4d9-bd26013c6971')
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/TahaRamakda/UNO.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t TahaRamakda/UNO .'
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', '90ea501a-d207-4767-a4d9-bd26013c6971') {
                        sh 'docker push TahaRamakda/UNO:latest'
                    }
                }
            }
        }
        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-49-134-219.eu-north-1.compute.amazonaws.com 'docker pull TahaRamakda/UNO:latest'
                    ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-49-134-219.eu-north-1.compute.amazonaws.com 'docker stop UNO || true'
                    ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-49-134-219.eu-north-1.compute.amazonaws.com 'docker rm UNO || true'
                    ssh -o StrictHostKeyChecking=no ubuntu@ec2-13-49-134-219.eu-north-1.compute.amazonaws.com 'docker run -d -p 9000:9000 --name UNO TahaRamakda:latest'
                    '''
                }
            }
        }
    }
}
