import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";

function LeftNav() {

    const { t, i18n } = useTranslation();
    const [isNavExpanded, setIsNavExpanded] = useState(false)


    return (

        <div>
            <nav className="navigation">

                <button className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    MENU
                </button>

                <div className="navigationMenu">
                    <div
                        className={
                            isNavExpanded ? "navigationMenu expanded" : "navigationMenu"
                        }
                    >

                        <ul>
                            <li>

                                <Link to="/">
                                    <button className="submitbutton">{t("portal.nav")}</button>
                                </Link>
                            </li>
                            <li >
                                <Link to="/newform">
                                    <button className="submitbutton">{t("newform.nav")}</button></Link>
                            </li>
                            <li><Link to="/retrieveprevious"><button className="submitbutton">{t("retrieve.nav")}</button>
                            </Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>

    );
}

export default LeftNav;
