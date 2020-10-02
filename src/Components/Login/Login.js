import React from 'react'
import "./styles.css";

export default function Login({title="Login", inputUser="User", inputPass="Pass"}) {


    return (
        <>
            <section id="sectionLogin">
                <div className="box">
                    <div className="form">
                        <h2>{title}</h2>
                        <form>
                            <div className="inputBx">
                                {inputUser}
                                <i className="fas fa-user"></i>
                            </div>
                            <div className="inputBx">
                                {inputPass}
                                <i className="fas fa-lock"></i>
                            </div>
                            <label className="remember">
                                <input type="checkbox"/>Remember Me
                            </label>
                            <div className="inputBx">
                                <input type="submit" value="Login"/>
                            </div>
                        </form>
                        <p>Forget <a href="/">Password</a></p>
                        <p>Need on <a href="/">Account</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}
