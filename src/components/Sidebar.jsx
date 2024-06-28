"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] border border-[#0D3026] text-white rounded-lg relative overflow-hidden">
      <div className="">
        <React.Fragment>
          <div className="coursor-pointer">
            <BootstrapDialog
              onClose={handleClose}
              aria-labelledby="customized-dialog-title"
              open={open}
            >
              <DialogContent dividers>
                <Typography gutterBottom>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/fT1sIZRJb2c?si=w5Fbi76Q1X7wSPLz&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </Typography>
              </DialogContent>
            </BootstrapDialog>
          </div>
        </React.Fragment>
      </div>
      <div>
        <img
          className="opacity-10 absolute -top-5 -right-[150px] z-0"
          src="https://i.ibb.co/jw30Gyn/1-a-HMm-QFQNC76z-CZBZf-Fg-Jg-unscreen.gif"
          alt="react"
        />
      </div>
      <div className="">
        <div>
          <div className="flex justify-center mt-5">
            <img
              className="h-[200px] w-[200px] object-cover rounded-full z-10"
              src="https://i.ibb.co/tCLWGdM/WIN-20240620-02-19-31-Pro-removebg-preview-1-2.png"
              alt=""
            />
          </div>
          <div className="flex ml-20 -mt-12 cursor-pointer">
            <img
              onClick={handleClickOpen}
              className="rounded-full z-10"
              src="https://i.ibb.co/TvnNb62/icons8-video.gif"
              alt="video"
            />
          </div>
          <div className="flex flex-col justify-center items-center p-5">
            <h1 className="text-[25px] font-semibold">Zioun Khan</h1>
            <h2 className="text-[#909090] text-[18px] font-semibold">
              jionkhan0@gmail.com
            </h2>
          </div>
          <div>
            <h1 className="text-[#0FBB80] bg-[#12191B] text-center">
              <TypeAnimation
                sequence={[
                  "I am Front End Developer",
                  1000,
                  "I am React Developer",
                  1000,
                  "I am Junior Web Developer",
                  1000,
                  "I am Junior MERN Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "18px", display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div>
            <div className="bg-gradient-to-r from-[rgba(18,25,27,1)] to-[rgba(12,56,42,1)] flex justify-center gap-5">
              <a href="https://www.facebook.com/MOZiounKhan/" target="blank" className="text-[25px] py-5">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://www.linkedin.com/in/zioun/" target="blank" className="text-[25px] py-5">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://github.com/Zioun" target="blank" className="text-[25px] py-5">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

