import Section2 from "../models/section2.model.js";
import Section1 from "../models/sections1.model.js";

export const getSection1 = async (req, res) => {
  try {
    const getsection1 = await Section1.find();
    res.status(200).json(getsection1);
  } catch (error) {
    console.log(error);
  }
};
export const postSection1 = async (req, res) => {
  try {
    const { image, background, header, paragraph, button_label } = req.body;
    const newSection1 = await Section1.create({
      image,
      background,
      header,
      paragraph,
      button_label,
    });
    res.status(201).json(newSection1);
  } catch (error) {
    console.log(error);
  }
};

export const getSection2 = async (req, res) => {
  try {
    const getsection2 = await Section2.find();
    res.status(200).json(getsection2);
  } catch (error) {
    console.log(error);
  }
};

export const postSection2 = async (req, res) => {
  try {
    const {
      image,
      background,
      span,
      header,
      about,
      paragraph,
      button_label,
      jobs,
    } = req.body;
    const newSection2 = await Section2.create({
      image,
      background,
      span,
      header,
      about,
      paragraph,
      button_label,
      jobs,
    });
    res.status(201).json(newSection2);
  } catch (error) {
    console.log(error);
  }
};
