import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { passwordValidate } from "../helper/validate";
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'

export default function Password() {

    const formik = useFormik({
        initialValues: {
            password: ''
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values);
        }
    })

    return (
        <div className="container mx-auto">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>
                    <div className="title">
                        <h4 className="text-5xl font-bold"> Hello Again!</h4>
                        <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                            Explore more by connecting whit us.
                        </span>
                    </div>

                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img src={avatar} alt="avatar" className={styles.profile_img} />
                        </div>

                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder="Password" />
                            <button className={styles.btn} type="submit">Sign in</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">
                                Forgot Password?{" "}
                                <Link to="/recovery" className="text-red-500">
                                    Recover Now
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
