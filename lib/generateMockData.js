import fs from 'fs';
import path from 'path';
import { faker } from '@faker-js/faker';

export function generateMockData(schema, rowCount) {
  return Array.from({ length: rowCount }, () => {
    const row = {};
    Object.entries(schema).forEach(([key, datatype]) => {
      switch (datatype.toLowerCase()) {
        case 'string':
          row[key] = faker.word.sample(); 
          break;
        case 'name':
          row[key] = faker.person.fullName(); 
          break;
        case 'email':
          row[key] = faker.internet.email();
          break;
        case 'address':
          row[key] = faker.location.streetAddress(); 
          break;
        case 'phone':
          row[key] = faker.phone.number('###-###-####'); 
          break;
        case 'mobile':
          row[key] = faker.phone.number('###-###-####'); 
          break;
        case 'number':
          row[key] = faker.number.int(1000); 
          break;
        case 'boolean':
          row[key] = faker.datatype.boolean(); 
          break;
        case 'date':
          row[key] = faker.date.past().toISOString();
          break;
        default:
          row[key] = `Unsupported datatype: ${datatype}`; 
      }
    });
    return row;
  });
}

export function saveMockDataToFile(schema, rowCount, filePath) {
  const mockData = generateMockData(schema, rowCount);
  const resolvedPath = path.resolve(process.cwd(), filePath);
  console.log(`📂 Saving mock data to: ${resolvedPath}`);

  try {
    fs.writeFileSync(resolvedPath, JSON.stringify(mockData, null, 2), 'utf8');
    console.log(`✅ Mock data saved to ${resolvedPath}`);
  } catch (error) {
    console.error(`❌ Failed to save mock data: ${error.message}`);
  }
}
