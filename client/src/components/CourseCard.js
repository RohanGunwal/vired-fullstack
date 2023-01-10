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
        <Typography gutterBottom variant="h5" component="div">
          {data?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe impedit
          modi, numquam voluptatum iste, facere voluptatem dignissimos quidem ut
          fuga eius cupiditate doloremque error aut architecto! Provident
          repudiandae aliquam ab maxime in voluptatum quidem culpa beatae?
          Quisquam neque quaerat rem consectetur corporis modi exercitationem
          delectus laboriosam, quia error ut voluptatibus.
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
          className="text-blue-500 no-underline font-semibold text-sm font-roboto"
        >
          PPT
        </a>
      </CardActions>
    </Card>
  );
}
