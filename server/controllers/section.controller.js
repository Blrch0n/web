import Section1 from "../models/sections1.model.js";
import Section2 from "../models/section2.model.js";
import Section3 from "../models/section3.model.js";
import Section4 from "../models/section4.model.js";
import Section5 from "../models/section5.model.js";
import Section6 from "../models/section6.model.js";
import Section7 from "../models/section7.model.js";
import Section8 from "../models/section8.model.js";
import Section9 from "../models/section9.model.js";
import Section10 from "../models/section10.model.js";
import Section11 from "../models/section11.model.js";
import Section12 from "../models/section12.model.js";
import Section13 from "../models/section13.model.js";
import AboutUsSection1 from "../models/(about-us)/AboutUsSection1.model.js";
import AboutUsSection2 from "../models/(about-us)/AboutUsSection2.model.js";
import AboutUsSection3 from "../models/(about-us)/AboutUsSection3.model.js";
import Blog1 from "../models/(blog)/blog1.model.js";
import Portfolio1 from "../models/(portfolio)/portfolio1.model.js";

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
    await Section1.deleteMany({});
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
export const deleteAllSection1 = async (req, res) => {
  try {
    await Section1.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
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
    await Section2.deleteMany({});
    const {
      image,
      background,
      span,
      header,
      about,
      paragraph,
      button_label,
      title1,
      color1,
      title2,
      color2,
      title3,
      color3,
      title4,
      color4,
    } = req.body;
    const newSection2 = await Section2.create({
      image,
      background,
      span,
      header,
      about,
      paragraph,
      button_label,
      title1,
      color1,
      title2,
      color2,
      title3,
      color3,
      title4,
      color4,
    });
    res.status(201).json(newSection2);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection2 = async (req, res) => {
  try {
    await Section2.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection3 = async (req, res) => {
  try {
    const getSection3 = await Section3.find();
    res.status(200).json(getSection3);
  } catch (error) {
    console.log(error);
  }
};
export const postSection3 = async (req, res) => {
  try {
    await Section3.deleteMany({});
    const { header, background_image } = req.body;
    const newSection3 = await Section3.create({ header, background_image });
    res.status(201).json(newSection3);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection3 = async (req, res) => {
  try {
    await Section3.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection4 = async (req, res) => {
  try {
    const getSection4 = await Section4.find();
    res.status(200).json(getSection4);
  } catch (error) {
    console.log(error);
  }
};
export const postSection4 = async (req, res) => {
  try {
    await Section4.deleteMany({});
    const { about, span, header, button_label, background_image } = req.body;
    const newSection4 = await Section4.create({
      about,
      span,
      header,
      button_label,
      background_image,
    });
    res.status(201).json(newSection4);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection4 = async (req, res) => {
  try {
    await Section4.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection5 = async (req, res) => {
  try {
    const getSection5 = await Section5.find();
    res.status(200).json(getSection5);
  } catch (error) {
    console.log(error);
  }
};
export const postSection5 = async (req, res) => {
  try {
    await Section5.deleteMany({});
    const { label, paragraph, image1, image2, image3, image4, image5, image6 } =
      req.body;
    const newSection5 = await Section5.create({
      label,
      paragraph,
      image1,
      image2,
      image3,
      image4,
      image5,
      image6,
    });
    res.status(201).json(newSection5);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection5 = async (req, res) => {
  try {
    await Section5.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection6 = async (req, res) => {
  try {
    const getSection6 = await Section6.find();
    res.status(200).json(getSection6);
  } catch (error) {
    console.log(error);
  }
};
export const postSection6 = async (req, res) => {
  try {
    await Section6.deleteMany({});
    const {
      background_image,
      about,
      header,
      span,
      title1,
      title2,
      title3,
      title4,
      title5,
      title6,
    } = req.body;
    const newSection6 = await Section6.create({
      background_image,
      about,
      header,
      span,
      title1,
      title2,
      title3,
      title4,
      title5,
      title6,
    });
    res.status(201).json(newSection6);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection6 = async (req, res) => {
  try {
    await Section6.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection7 = async (req, res) => {
  try {
    const getSection7 = await Section7.find();
    res.status(200).json(getSection7);
  } catch (error) {
    console.log(error);
  }
};
export const postSection7 = async (req, res) => {
  try {
    await Section7.deleteMany({});
    const {
      image,
      background_image,
      header,
      span,
      paragraph,
      list1,
      list2,
      list3,
      list4,
      button_label,
    } = req.body;
    const newSection7 = await Section7.create({
      image,
      background_image,
      header,
      span,
      paragraph,
      list1,
      list2,
      list3,
      list4,
      button_label,
    });
    res.status(201).json(newSection7);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection7 = async (req, res) => {
  try {
    await Section7.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection8 = async (req, res) => {
  try {
    const getSection8 = await Section8.find();
    res.status(200).json(getSection8);
  } catch (error) {
    console.log(error);
  }
};
export const postSection8 = async (req, res) => {
  try {
    await Section8.deleteMany({});
    const { background_image, teamMembers } = req.body;
    const newSection8 = await Section8.create({
      background_image,
      teamMembers,
    });
    res.status(201).json(newSection8);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection8 = async (req, res) => {
  try {
    await Section8.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection9 = async (req, res) => {
  try {
    const getSection9 = await Section9.find();
    res.status(200).json(getSection9);
  } catch (error) {
    console.log(error);
  }
};
export const postSection9 = async (req, res) => {
  try {
    await Section9.deleteMany({});
    const {
      number1,
      label1,
      number2,
      label2,
      number3,
      label3,
      number4,
      label4,
    } = req.body;
    const newSection9 = await Section9.create({
      number1,
      label1,
      number2,
      label2,
      number3,
      label3,
      number4,
      label4,
    });
    res.status(201).json(newSection9);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection9 = async (req, res) => {
  try {
    await Section9.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection10 = async (req, res) => {
  try {
    const getSection10 = await Section10.find();
    res.status(200).json(getSection10);
  } catch (error) {
    console.log(error);
  }
};
export const postSection10 = async (req, res) => {
  try {
    await Section10.deleteMany({});
    const { background_image, teamMembers } = req.body;
    const newSection10 = await Section10.create({
      background_image,
      teamMembers,
    });
    res.status(201).json(newSection10);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection10 = async (req, res) => {
  try {
    await Section10.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection11 = async (req, res) => {
  try {
    const getSection11 = await Section11.find();
    res.status(200).json(getSection11);
  } catch (error) {
    console.log(error);
  }
};
export const postSection11 = async (req, res) => {
  try {
    await Section11.deleteMany({});
    const { about, header, span, blogPosts } = req.body;
    const newSection11 = await Section11.create({
      about,
      header,
      span,
      blogPosts,
    });
    res.status(201).json(newSection11);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection11 = async (req, res) => {
  try {
    await Section11.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection12 = async (req, res) => {
  try {
    const getSection12 = await Section12.find();
    res.status(200).json(getSection12);
  } catch (error) {
    console.log(error);
  }
};
export const postSection12 = async (req, res) => {
  try {
    await Section12.deleteMany({});
    const {
      background,
      header1,
      paragraph1,
      header2,
      paragraph2,
      header3,
      button1_label,
      button2_label,
      button3_label,
      button_label,
    } = req.body;
    const newSection12 = await Section12.create({
      background,
      header1,
      paragraph1,
      header2,
      paragraph2,
      header3,
      button1_label,
      button2_label,
      button3_label,
      button_label,
    });
    res.status(201).json(newSection12);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection12 = async (req, res) => {
  try {
    await Section12.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getSection13 = async (req, res) => {
  try {
    const getSection13 = await Section13.find();
    res.status(200).json(getSection13);
  } catch (error) {
    console.log(error);
  }
};
export const postSection13 = async (req, res) => {
  try {
    await Section13.deleteMany({});
    const {
      background_image,
      paragraph,
      placeholder,
      button_label,
      header1,
      header2,
      instagramImages,
      Section13_data,
    } = req.body;
    const newSection13 = await Section13.create({
      background_image,
      paragraph,
      placeholder,
      button_label,
      header1,
      header2,
      instagramImages,
      Section13_data,
    });
    res.status(201).json(newSection13);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAllSection13 = async (req, res) => {
  try {
    await Section13.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getAboutUsSection1 = async (req, res) => {
  try {
    const getSection1 = await AboutUsSection1.find();
    res.status(200).json(getSection1);
  } catch (error) {
    console.log(error);
  }
};
export const postAboutUsSection1 = async (req, res) => {
  try {
    await AboutUsSection1.deleteMany({});
    const { background } = req.body;
    const newSection1 = await AboutUsSection1.create({
      background,
    });
    res.status(201).json(newSection1);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAboutUsSection1 = async (req, res) => {
  try {
    await AboutUsSection1.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getAboutUsSection2 = async (req, res) => {
  try {
    const getSection2 = await AboutUsSection2.find();
    res.status(200).json(getSection2);
  } catch (error) {
    console.log(error);
  }
};
export const postAboutUsSection2 = async (req, res) => {
  try {
    await AboutUsSection2.deleteMany({});
    const {
      background,
      image,
      about,
      span,
      header,
      paragraph,
      button_label,
      progresses,
    } = req.body;
    const newSection2 = await AboutUsSection2.create({
      background,
      image,
      about,
      span,
      header,
      paragraph,
      button_label,
      progresses,
    });
    res.status(201).json(newSection2);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAboutUsSection2 = async (req, res) => {
  try {
    await AboutUsSection2.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getAboutUsSection3 = async (req, res) => {
  try {
    const getSection3 = await AboutUsSection3.find();
    res.status(200).json(getSection3);
  } catch (error) {
    console.log(error);
  }
};
export const postAboutUsSection3 = async (req, res) => {
  try {
    await AboutUsSection3.deleteMany({});
    const { background, image, about, span, header, jobs } = req.body;
    const newSection3 = await AboutUsSection3.create({
      background,
      image,
      about,
      span,
      header,
      jobs,
    });
    res.status(201).json(newSection3);
  } catch (error) {
    console.log(error);
  }
};
export const deleteAboutUsSection3 = async (req, res) => {
  try {
    await AboutUsSection3.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getBlog = async (req, res) => {
  try {
    const Blog = await Blog1.find();
    res.status(200).json(Blog);
  } catch (error) {
    console.log(error);
  }
};
export const postBlog = async (req, res) => {
  try {
    await Blog1.deleteMany({});
    const { images } = req.body;
    const newSection3 = await Blog1.create({
      images,
    });
    res.status(201).json(newSection3);
  } catch (error) {
    console.log(error);
  }
};
export const deleteBlog = async (req, res) => {
  try {
    await Blog1.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
export const getPortfolio = async (req, res) => {
  try {
    const Portfolio = await Portfolio1.find();
    res.status(200).json(Portfolio);
  } catch (error) {
    console.log(error);
  }
};
export const postPortfolio = async (req, res) => {
  try {
    await Portfolio1.deleteMany({});
    const { images } = req.body;
    const newSection3 = await Portfolio1.create({
      images,
    });
    res.status(201).json(newSection3);
  } catch (error) {
    console.log(error);
  }
};
export const deletePortfolio = async (req, res) => {
  try {
    await Portfolio1.deleteMany({});
    res.status(200).json({ message: "All sections deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
