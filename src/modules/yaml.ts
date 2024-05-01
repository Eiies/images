import * as fs from "fs";
import * as yaml from "js-yaml";

const readYAMLFile = (filePath: string): any => {
  const yamlData = fs.readFileSync(filePath, "utf8");
  const parsedData = yaml.load(yamlData);
  return parsedData;
};

export default readYAMLFile;
