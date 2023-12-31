import React from "react";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { usernameValidate } from "../helper/validate";
import avatar from '../assets/profile.png'
import styles from '../styles/Username.module.css'

export default function Username() {

    const formik = useFormik({
        initialValues: {
            username: ''
        },
        validate: usernameValidate,
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
                            <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder="Username" />
                            <button className={styles.btn} type="submit">Let's go</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">
                                Not a Member{" "}
                                <Link to="/register" className="text-red-500">
                                    Register Now
                                </Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
