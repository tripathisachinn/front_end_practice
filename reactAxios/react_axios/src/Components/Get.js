import axios from 'axios';

export default function componentDidMount() {
    // Simple GET request using axios
    axios.get('https://api.npms.io/v2/search?q=react')
        .then(response => this.setState({ totalReactPackages: response.data.total }));
}   
