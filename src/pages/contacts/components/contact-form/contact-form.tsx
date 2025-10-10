import { Form, Button, Input, Select, Space } from "antd";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactFormSchema } from "./hooks";
import { ModalOk } from "../../../../shared";
import { useState } from "react";
import { type Contact } from "../../../../shared/types";

const Item = Form.Item;

export const ContactForm = () => {
  const [form] = Form.useForm();

  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
  };

  type ContactFormSchema = z.infer<typeof contactFormSchema>;

  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const watchOccupation = watch("occupation");

  const onSubmit: SubmitHandler<Contact> = (data) => {
    const submitData = { ...data };

    if (submitData.occupation !== "model") {
      delete submitData.agency;
    }
    if (submitData.occupation !== "other") {
      delete submitData.other;
    }

    if (submitData.comment == undefined) {
      delete submitData.comment;
    }
    if (submitData.agency == undefined || null) {
      delete submitData.agency;
    }

    setTimeout(() => {
      console.log(submitData);
      showModal();
      reset();
    }, 2000);
  };

  const onCancel = () => {
    reset();
  };

  return (
    <>
      <h3 className="contact-form-title justify-center ">
        Interested in collaboration? Fill out the form below!
      </h3>
      <div className="flex justify-center">
        <Form
          layout="vertical"
          form={form}
          className="flex flex-col gap-4 w-full max-w-96"
        >
          <Item
            className="!m-0"
            label="Occupation"
            help={errors.occupation?.message}
            validateStatus={errors.occupation && "error"}
          >
            <Controller
              name="occupation"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  placeholder="Select an option"
                  options={[
                    { value: "model", label: "Model" },
                    { value: "stylist", label: "Stylist" },
                    { value: "mua", label: "Make up artist" },
                    { value: "other", label: "Other" },
                  ]}
                />
              )}
            />
          </Item>

          <Item noStyle>
            {watchOccupation === "other" ? (
              <Item
                className="!m-0"
                label="Other"
                help={errors.other?.message}
                validateStatus={errors.other && "error"}
              >
                <Controller
                  name="other"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="Enter your occupation" />
                  )}
                />
              </Item>
            ) : null}
          </Item>

          <Item
            className="!m-0"
            label="Full name"
            help={errors.fullName?.message}
            validateStatus={errors.fullName && "error"}
          >
            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Surname Name" />
              )}
            />
          </Item>

          <Item noStyle>
            {watchOccupation === "model" ? (
              <Item
                className="!m-0"
                label="Agency"
                help={errors.agency?.message}
                validateStatus={errors.agency && "error"}
              >
                <Controller
                  name="agency"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </Item>
            ) : null}
          </Item>

          <Item
            className="!m-0"
            label="Instagram"
            help={errors.instagram?.message}
            validateStatus={errors.instagram && "error"}
          >
            <Controller
              name="instagram"
              control={control}
              render={({ field }) => (
                <Input {...field} placeholder="Enter your nickname, not link" />
              )}
            />
          </Item>

          <Item
            className="!m-0"
            label="Telegram"
            help={errors.telegram?.message}
            validateStatus={errors.telegram && "error"}
          >
            <Controller
              name="telegram"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Enter your number +7XXXXXXXXXX"
                />
              )}
            />
          </Item>

          <Item
            label="Comment"
            help={errors.comment?.message}
            validateStatus={errors.comment && "error"}
          >
            <Controller
              name="comment"
              control={control}
              render={({ field }) => <Input.TextArea {...field} />}
            ></Controller>
          </Item>

          <Item>
            <Space>
              <Button htmlType="button" onClick={onCancel}>
                Cancel
              </Button>
              <Button type="primary" onClick={handleSubmit(onSubmit)}>
                Submit
              </Button>
            </Space>
          </Item>
        </Form>
        <ModalOk
          title="You successfully submitted form!"
          onOk={handleOk}
          open={open}
        />
      </div>
    </>
  );
};
