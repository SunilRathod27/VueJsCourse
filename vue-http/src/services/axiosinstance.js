const { default: Axios } = require('axios');

const axiosinstance = Axios.create({
    baseURL: 'https://vue-completecourse.firebaseio.com/',
});

axiosinstance.defaults.headers.common['Demoinstance'] =
    'Demo instance header';

export default axiosinstance;
