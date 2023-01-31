import path from 'path';
import { promises as fs } from 'fs';
import { Me } from '../../types/me';

export default async function handler(req: any, res: any) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = await fs.readFile(jsonDirectory + '/me.json', 'utf8');
  //Return the content of the data file in json format
  res.status(200).json(fileContents as unknown as Me);
}