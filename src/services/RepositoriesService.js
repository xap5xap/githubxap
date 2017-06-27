import AuthService from './AuthService';

class RepositoriesService {

    getMyRepositories() {
        return new Promise((resolve, reject) => {
            AuthService.getAuthInfo()
                .then(authInfo => {
                    var url = `https://api.github.com/user/repos`;
                    fetch(url, {
                        headers: authInfo.header
                    })
                        .then(response => response.json())
                        .then(responseData => {
                            console.log('va a resolver');
                            resolve(responseData);
                        });
                });
        });
    }



}

module.exports = new RepositoriesService();