import { Button, Form, Input, Select } from "antd";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import {
  getSummaryRequest,
  storeSummarry,
} from "../../../redux/slicers/general";
import { Images } from "../../../theme";
import "./styles.scss";
const Summarize = () => {
  const [summarizeForm] = Form.useForm();
  const [selectedLang, setSelectedlang] = useState("eng_summary");
  const [isLoading, setLoading] = useState(false);
  const summarizedData = useSelector((state) => state.general.data);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setLoading(true);
    const values = summarizeForm.getFieldsValue();
    var FinalURL = `http://127.0.0.1:5000/api/?video_url=${values.url}`;
    fetch(FinalURL)
      .then((res) => res.json())
      .then((result) => {
        dispatch(storeSummarry(result?.data));
        setLoading(false);
      });
  };
  useEffect(() => {
    console.log(summarizedData);
  }, [summarizedData]);

  const handleChange = (value) => {
    setSelectedlang(value);
  };
  return (
    <section
      className="summarize-wrapper"
      style={{ backgroundImage: `url(${Images.HomeBG}) ` }}
    >
      <span className="summarize-content">
        <h3>Summarize Your Video</h3>
        <Form
          form={summarizeForm}
          className="summarize-form"
          onFinish={handleSubmit}
        >
          <Form.Item name={"url"} className="summarize-input">
            <Input placeholder="Enter Video URL" autoComplete="off" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="summarize-btn">
              Summarize
            </Button>
          </Form.Item>
        </Form>
        {isLoading ? (
          <BeatLoader size={20} color="#fff" />
        ) : (
          summarizedData && (
            <div className="summarized-data">
              <Select
                options={[
                  {
                    value: "eng_summary",
                    label: "English",
                  },
                  { value: "Urdu_summary", label: "Urdu" },
                ]}
                defaultValue="eng_summary"
                onChange={handleChange}
              />

              <p className="summary">
                {selectedLang === "eng_summary"
                  ? summarizedData.eng_summary
                  : summarizedData.Urdu_summary}
              </p>
            </div>
          )
        )}
      </span>
    </section>
  );
};

export default Summarize;
