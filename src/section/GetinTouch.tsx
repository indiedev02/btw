"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, CheckCircle, AlertCircle } from "lucide-react";
import Image from "next/image";
import logo1 from "@/assets/ipsen.png";
import logo2 from "@/assets/io.png";
import logo3 from "@/assets/hosachiguru.png";
import logo4 from "@/assets/multipie.png";
import logo5 from "@/assets/colfax.png";
import logo6 from "@/assets/bp.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const features = [
  {
    icon: <Layers className="w-6 h-6 text-white" />,
    title: "End-to-End Engineering Services",
    description:
      "From concept to deployment we design, develop, and deliver robust deep-tech solutions across industries.",
    color: "bg-[#E7563D]",
  },
  {
    icon: <Cpu className="w-6 h-6 text-white" />,
    title: "Built-In Product Expertise",
    description:
      "We don't just consult. We build. Our in-house product experience powers how we approach every client solution.",
    color: "bg-[#00525E]",
  },
];

const GetinTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      setResponseMessage("Please fill out all required fields.");
      setIsError(true);
      return;
    }

    if (!isValidEmail(formData.email)) {
      setResponseMessage("Please enter a valid email address.");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage("");
    setIsError(false);

    const formattedPhone = formData.phone.startsWith("+")
      ? formData.phone
      : `+91${formData.phone}`;

    const payload = {
      name: `${formData.name} - Contact Us Lead`,
      description: "Lead from website contact form.",
      status: "NEW",
      custom_fields: [
        { id: "b72f29e2-75f7-450b-af7a-8604ac7e6be0", value: formData.name },
        { id: "bb794df5-fb3a-4798-9788-865a373e15a7", value: formData.email },
        { id: "965d7a02-db51-4e4b-a477-fcdc5450d5f3", value: formattedPhone },
        {
          id: "86d62c16-feaa-475b-bfc3-2029e8ee723e",
          value: formData.company.trim() || "notProvided",
        },
        { id: "b6c01d39-c5b0-4bde-9fcf-d1233c0d5281", value: formData.message },
        {
          id: "2ecc6b05-65ce-46e7-bd01-d2573773be9c",
          value: "4a31bcfc-840b-46e8-b43f-9e54a54b7a8c",
        },
      ],
    };

    try {
      const response = await fetch(
        "https://api.clickup.com/api/v2/list/901609058680/task",
        {
          method: "POST",
          headers: {
            Authorization: "pk_55237400_3U9ZYYKHOQGEFRJUT2V1277M6Z8E7LN0",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setResponseMessage("Your response has been submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setTimeout(() => setResponseMessage(""), 5000);
      } else {
        setResponseMessage("Failed to submit the form. Please try again.");
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setResponseMessage("An error occurred while submitting the form.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Get in touch
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {
                  "Let's talk about how our engineering expertise can help solve your toughest challenges — and scale what matters."
                }
              </p>
            </div>

            {/* Trusted By */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Trusted by</h3>
              <div className="flex flex-wrap items-center gap-6">
                {logos.map((logo, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <Image
                      src={logo}
                      alt={`Partner ${idx + 1}`}
                      className="w-16 h-16 object-contain"
                      unoptimized
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="flex gap-4"
                >
                  <div
                    className={`${feature.color} w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start lg:justify-end"
          >
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name*
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ava Brown"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email*
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ava@google.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium">
                  Phone*
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 7089123465"
                  value={formData.phone}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Blackspektro"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium">
                  Message*
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hi, I am reaching out for..."
                  value={formData.message}
                  onChange={handleChange}
                  className="min-h-[120px] rounded-xl"
                />
              </div>

              {responseMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 p-3 rounded-xl ${isError ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}
                >
                  {isError ? (
                    <AlertCircle className="w-5 h-5" />
                  ) : (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  <p className="text-sm">{responseMessage}</p>
                </motion.div>
              )}

              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;
