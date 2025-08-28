import React, { useState } from "react";
import { AiOutlineLock } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import { changePasswordApi } from "../../serivces/users/userService";
import { useMutation } from "@tanstack/react-query";
import AlertMessage from "../Alert/AlertMessage";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("New Password is required"),
});
const UpdatePassword = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { mutateAsync, isError, error, isSuccess } = useMutation({
    mutationFn: changePasswordApi,
    mutationKey: ["change-password"],
  });

  const formik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: ""
    },
    // Validations
    validationSchema,
    //Submit
    onSubmit: (values) => {
    //   console.log(values);
      mutateAsync(values)
        .then((data) => {
          dispatch(logoutAction())
          setTimeout(()=>{
            navigate("/login")
          },3000)
          console.log(data)
        })
        .catch((e) => console.log(e));
    },
  });
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-semibold mb-4">Change Your Password</h2>
      {isError && (
        <AlertMessage
          type="error"
          message={
            error?.response?.data?.message ||
            "Something happened please try again later"
          }
        />
      )}
      {isSuccess && (
        <AlertMessage type="success" message="Password updated successfully." />
      )}
      <form onSubmit={formik.handleSubmit} className="w-full max-w-xs mb-10">
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2 mt-3"
            htmlFor="currentPassword"
          >
            Current Password
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded">
            <AiOutlineLock className="text-gray-400 mr-2" />
            <input
              id="currentPassword"
              type="password"
              name="currentPassword"
              {...formik.getFieldProps("currentPassword")}
              className="outline-none flex-1"
              placeholder="Enter current password"
            />
          </div>
          {formik.touched.currentPassword && formik.errors.currentPassword && (
            <span className="text-xs text-red-500">
              {formik.errors.currentPassword}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2 mt-3"
            htmlFor="newPassword"
          >
            New Password
          </label>
          <div className="flex items-center border-2 py-2 px-3 rounded">
            <AiOutlineLock className="text-gray-400 mr-2" />
            <input
              id="newPassword"
              type="password"
              name="newPassword"
              {...formik.getFieldProps("newPassword")}
              className="outline-none flex-1"
              placeholder="Enter new password"
            />
          </div>
          {formik.touched.newPassword && formik.errors.newPassword && (
            <span className="text-xs text-red-500">
              {formik.errors.newPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;