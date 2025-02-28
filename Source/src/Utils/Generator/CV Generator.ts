import * as fs from "fs";
import path from "path";

import { WebProjects } from "../../Data/Projects";

async function generateCV() {
  const data: Array<string> = [];
  const header = await fs.readFileSync(path.join("Data", "Header.tex"), "utf8");
  data.push(header);

  WebProjects.forEach((project) => {
    console.log(project);
  });
  console.log(data);
}

generateCV();
