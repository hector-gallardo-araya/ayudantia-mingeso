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
                    sh "mvn clean install"
                }
            }
        }
        stage("Test"){
            steps{
                dir("gestion-estudiantes-backend"){
                    sh "mvn test"
                }
            }
        }        
        stage("Build and Push Docker Image"){
            steps{
                dir("gestion-estudiantes-backend"){
                    script{
                         withCredentials([string(usernamePassword(credentialsId: "docker-credentials", usernameVariable: 'docker-username', passwordVariable: 'docker-password'))]) {                            
                            sh "docker login -u ${docker-username} -p ${docker-password}"
                            sh "docker build -t polloh/gestion-estudiantes-backend ."
                            sh "docker push polloh/gestion-estudiantes-backend"
                            sh "docker logout"
                        }
                    }                    
                }
            }
        }
    }
}
