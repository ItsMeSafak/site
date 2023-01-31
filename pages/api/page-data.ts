import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: any, res: any) {
  console.log('test');
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/pages.json', 'utf8');
  //Return the content of the data file in json format
  console.log('filecontents', fileContents);
  res.status(200).json(JSON.parse(fileContents));
}