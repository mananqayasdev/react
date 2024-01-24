pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'mananqayas960/react'
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t $DOCKER_IMAGE:$BUILD_NUMBER .'
                }
            }
        }

        stage('Push') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerHubCredentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    script {
                        sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                        sh 'docker push $DOCKER_IMAGE:$BUILD_NUMBER'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['ec2SshCredentials']) {
                    script {
                        sh '''
                            ssh -o StrictHostKeyChecking=no ubuntu@54.245.145.148 "docker pull $DOCKER_IMAGE:$BUILD_NUMBER && docker stop $(docker ps -q) && docker run -d -p 80:80 $DOCKER_IMAGE:$BUILD_NUMBER"
                        '''
                    }
                }
            }
        }
    }
}