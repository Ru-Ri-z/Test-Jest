const cities = ['Ciudad de Mexico', 'Bogota', 'Lima', 'Buenos Ares'];

const randomString = () => {
    const string = cities[Math.floor(Math.random() * cities.length)]
    return String;
};

module.exports = randomString;