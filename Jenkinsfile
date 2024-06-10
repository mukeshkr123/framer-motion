pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Insert build commands here, e.g.:
                // sh 'make'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                // Insert test commands here, e.g.:
                // sh 'make test'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Insert deploy commands here, e.g.:
                // sh 'scp target/myapp.war user@server:/path/to/deploy'
            }
        }
    }
    post {
        always {
            //  
            ech 'always...'
        }
        success {
            ech 'success...`
        }
        failure {
            ech `error...`
        }
    }
}
