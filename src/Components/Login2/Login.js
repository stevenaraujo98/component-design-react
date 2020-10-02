import React from 'react'
import "./styles.css";

export default function Login({title="Login", inputUser="User", inputPass="Pass", btn=<input></input>}) {


    return (
        <>
            <div id="sectionLogin2">
                <div className="box2">
                        <h2>{title}</h2>
                        <form>
                            <div className="inputBx2">
                                <input type="text" required/>
                                <label>{inputUser}</label>
                            </div>
                            <div className="inputBx2">
                                <input type="password" required/>
                                <label>{inputPass}</label>
                            </div>
                            <label className="remember">
                                <input type="checkbox"/>Remember Me
                            </label>
                            <div className="inputBx2">
                                <input type="submit" value="Login"/>
                                {btn}                                
                            </div>
                        </form>
                </div>
            </div>
        </>
    )
}
