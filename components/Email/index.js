import React from "react";
import EmailSVG from "../Icons/email";
import { EmailLink, TriangleCSS } from "./style";
import { useAnalytics } from "../../utils";

const Email = () => {
  const { trackEvent } = useAnalytics();

  const handleGaTracking = () =>
    trackEvent({
      action: "Email sent",
      category: "Contact",
    });

  return (
    <>
      <TriangleCSS />
      <EmailLink onClick={handleGaTracking} href="mailto:aw@alex-web.co.uk">
        <EmailSVG />
      </EmailLink>
    </>
  );
};

export default Email;
