pipeline{
    agent any
    tools{
        maven "maven"

    }
    stages{
        stage("Build JAR File"){
            steps{
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/hector-gallardo-araya/ayudantia-mingeso']])
                dir("gestion-estudiantes-backend"){
                    bat "mvn clean install"
                }
            }
        }
        stage("Test"){
            steps{
                dir("gestion-estudiantes-backend"){
                    bat "mvn test"
                }
            }
        }        
        stage("Build and Push Docker Image"){
            steps{
                dir("gestion-estudiantes-backend"){
                    script{
                         withDockerRegistry(credentialsId: 'docker-credentials'){
                            bat "docker build -t polloh/gestion-estudiantes-backend ."
                            bat "docker push polloh/gestion-estudiantes-backend"
                        }
                    }                    
                }
            }
        }
    }
}
