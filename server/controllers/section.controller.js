import Section1 from "../models/sections1.model";

export const getSection1 = async (req, res) => {
  try {
    const { image, background, header, paragraph, button_label } = req.body;
  } catch (error) {
    console.log(error);
  }
};
