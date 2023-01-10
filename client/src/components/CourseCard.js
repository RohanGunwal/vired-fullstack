import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TemporaryDrawer from "./Drawer";

export default function CourseCard(props) {
  const { data, index, assignmentData } = props;
  return (
    <Card sx={{ maxWidth: 345 }} className="shadow-lg rounded-lg">
      <CardMedia
        sx={{ height: 200 }}
        image={`assets/image-${index + 1}.jpeg`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" className="flex flex-col">
          {data?.topics.map((e, index) => (
            <a
              href={data?.readingMaterial[index]}
              rel="noreferrer"
              target="_blank"
              key={index}
              className="no-underline text-gray-600 text-base hover:bg-gray-100 py-2 px-2 hover:text-blue-700 rounded-lg hover:shadow-lg hover:font-semibold transition-all ease-in-out"
            >
              {e}
            </a>
          ))}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-end gap-6">
        <TemporaryDrawer
          data={assignmentData.filter((e) =>
            e.skillTags.toLowerCase().includes(`${data.title.toLowerCase()}`)
          )}
        />
        <a
          href={`${data.pptLink}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 no-underline font-semibold text-sm font-roboto hover:bg-blue-50 p-2 transition-all ease-in-out rounded"
        >
          PPT
        </a>
      </CardActions>
    </Card>
  );
}
