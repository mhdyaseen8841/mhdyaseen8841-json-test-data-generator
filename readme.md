# JSON Mock Generator

**Generate mock JSON data effortlessly!**  
`json-mock-generator` is a powerful yet simple CLI tool that allows you to generate mock JSON data based on a user-defined schema. Perfect for quickly creating data for `frontend development`, `testing APIs`, or `prototyping`.

Whether you're working on a project that requires a lot of data or you just need some quick mock data, this package is designed to make it easier.

## Features

- **Quickly generate mock data**: Define your schema and let the tool handle the rest.
- **Customizable schema**: Specify the field names and data types you need.
- **Multiple data types supported**: Including string, number, email, address, phone, and boolean.
- **Flexible number of rows**: Control how many mock data entries you want to generate.

---

## Installation

### Global Installation

To use the tool globally via the command line, run the following:

```bash
npm install -g json-mock-generator
```
Usage
After installation, you can use the command like this:
```bash 
json-mock-generator generate --rows <number> --schema <schema>
```

### Available Options:
- ``` --rows ``` or ``` -r ```: Specifies the number of rows to generate (default: 10).
- ``` --schema ``` or -s: A comma-separated list of key-value pairs defining the schema.
  - The format is ``` key:type ```, where ``` key ``` is the field name, and ``` type ``` is the data type.
  - Supported types:
    - ``` string ```: Generates a random string.
    - ``` number ```: Generates a random number.
    - ``` email ```: Generates a random email address.
    - ```address```: Generates a random address.
    - ```phone```: Generates a random phone number.
    - ```boolean```: Generates a random boolean (true or false).

### Example Command:
```bash
json-mock-generator generate --rows 5 --schema "keyName:datatype, keyName:datatype, keyName:datatype"

```
This will generate 5 mock data entries with random ```name```, ```email```, ```age```, and ```isActive``` values.

#### Output:
By default, the mock data is saved to a file named ```mockData.json``` in the current directory. You can specify a different file path with the ```--file``` option.

#### Example Output
For the following schema:

```bash
json-mock-generator generate --rows 3 --schema "name:string, email:email, address:address, phone:phone, isActive:boolean"
```
##### You might get output like this:

```bash
[
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "address": "1234 Elm St, Springfield",
    "phone": "(555) 123-4567",
    "isActive": true
  },
  {
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "address": "5678 Oak Ave, Shelbyville",
    "phone": "(555) 987-6543",
    "isActive": false
  },
  {
    "name": "Billy Bob",
    "email": "billy.bob@example.com",
    "address": "4321 Pine Ln, Capital City",
    "phone": "(555) 555-5555",
    "isActive": true
  }
]

```

### Contributing
We welcome contributions to improve and expand the project!

#### How to Contribute:
- Fork the repository.
- Create a new branch (```git checkout -b feature-branch```).
- Commit your changes (```git commit -am 'Add new feature'```).
- Push to the branch (```git push origin feature-branch```).
- Submit a pull request with a description of your changes.
- Make sure your code follows the project's coding standards and passes the tests!

#### License
This project is licensed under the MIT License.

## Author
####  [Mohammed Yaseen](https://mohammedyaseen.netlify.app/)

- [LinkedIn](https://www.linkedin.com/in/mohammed-yaseen-ysn8841/)
- [GitHub](https://github.com/mhdyaseen8841)
- [Repository](https://github.com/mhdyaseen8841/mhdyaseen8841-json-test-data-generator.git)

Feel free to reach out for any queries or collaboration opportunities!

*** _Enjoy generating mock data!_ ***