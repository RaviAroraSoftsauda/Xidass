import React, { useState } from 'react'
const dummyContent1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sequi earum eaque possimus consequatur neque nam blanditiis reprehenderit, a fuga quo magnam. Vitae sequi veniam id eos laboriosam repellendus dolorum ea ad quasi necessitatibus, architecto natus vero rerum quisquam non unde, obcaecati, ullam minima atque. Nesciunt quidem ipsam quae ea?`
const dummyContent2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident rem sunt mollitia obcaecati nam ratione delectus distinctio dolores, laboriosam eveniet aperiam consequuntur suscipit neque asperiores magni autem veniam. Nulla molestias unde nobis, iste culpa ad, dolores numquam odio veritatis officia modi nam, eveniet earum magni excepturi nesciunt. Et, iste atque.`
const dummyContent3 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ex nesciunt rerum. Aliquam, rem. Iusto obcaecati culpa facilis illum ullam laboriosam vitae, quod maxime placeat deleniti. Officiis tempore illo nam ipsam dignissimos! Debitis, inventore. Accusamus sapiente necessitatibus incidunt excepturi quae quis deleniti. Neque itaque commodi atque, exercitationem quaerat qui sed.`
const DescriptiveNavigation = ({ content, activeLinkNo = 1, bgcolor = "#E5E7E8", cb }) => {

    const [currentContent, setCurrentContent] = useState(dummyContent1);
    const [activeLink, setActiveLink] = useState(1);
    const setCurrentState = (content, link) => {
        setCurrentContent(content);
        setActiveLink(link)
    }
    return (
        <div className="p-b grid-2" style={{ backgroundColor: bgcolor }}>
            <div className="page-container">
                <div className="header-menu">
                    <p id="link1" className={activeLink === 1 ? "active" : ""} onClick={() => setCurrentState(dummyContent1, 1)}>
                        <span>specification</span>
                    </p>
                    <p id="link2" className={activeLink === 2 ? "active" : ""} onClick={() => setCurrentState(dummyContent2, 2)}>
                        <span>key features</span>
                    </p>
                    <p id="link3" className={activeLink === 3 ? "active" : ""} onClick={() => setCurrentState(dummyContent3, 3)}>
                        <span>supporting docs</span>
                    </p>
                </div>
                <div className="conatiner">
                    <p style={{ margin: '1rem 0px' }}>
                        {currentContent}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DescriptiveNavigation
