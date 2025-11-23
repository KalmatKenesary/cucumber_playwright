pipeline {
    agent 
    stages {
        stage('Checkout') {
            checkout scm
        }
        stage('Build') { 
            steps {
                echo "Selected env: ${ENV}"
                bat 'npm i'
                bat 'npx playwright install chromium'
            }
        }
        stage('Run tests') {
            steps {
                bat 'npm run test'
            }
        }
    }
}
