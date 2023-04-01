import { Table } from "@mantine/core";
import {
  IconBrandPython,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandGolang,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandCpp,
} from "@tabler/icons-react";

export function ProgrammingLanguages() {
  const items = [
    { name: "Ruby", numberOfYearsExperience: 8, experienceLevel: "Advanced" },
    {
      name: "Golang",
      logo: <IconBrandGolang />,
      numberOfYearsExperience: 3,
      experienceLevel: "Intermediate",
    },
    {
      name: "HTML5",
      logo: <IconBrandHtml5 />,
      numberOfYearsExperience: 8,
      experienceLevel: "Advanced",
    },
    {
      name: "CSS3",
      logo: <IconBrandCss3 />,
      numberOfYearsExperience: 8,
      experienceLevel: "Intermediate",
    },
    {
      name: "TypeScript (JavaScript)",
      logo: <IconBrandTypescript />,
      numberOfYearsExperience: 7,
      experienceLevel: "Advanced",
    },
    {
      name: "Python",
      logo: <IconBrandPython />,
      numberOfYearsExperience: 2,
      experienceLevel: "Beginner",
    },
    {
      name: "C++",
      logo: <IconBrandCpp />,
      numberOfYearsExperience: 2,
      experienceLevel: "Beginner",
    },
  ];
  const rows = items.map((item) => (
    <tr key={item.name}>
      <td>{item.name}</td>
      <td>{item.logo}</td>
      <td>{item.numberOfYearsExperience}+ years</td>
      <td>{item.experienceLevel}</td>
    </tr>
  ));
  return (
    <Table highlightOnHover horizontalSpacing="md" withBorder fontSize="sm">
      <thead>
        <tr>
          <th>Languages</th>
          <th>Logos</th>
          <th>Number of years experience</th>
          <th>Experience level</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}
