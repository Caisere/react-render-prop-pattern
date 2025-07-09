import { useState } from "react";



function CompanyLists({company, defaultVisibility = false}) {
  const {companyName, phrase} = company
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {phrase}
        </p>
      )}
    </li>
  )
}

export default CompanyLists