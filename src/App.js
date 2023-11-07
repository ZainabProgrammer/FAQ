import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import a from "../src/images/woman-desk.svg";
import b from "../src/images/box.svg";
import CustomAccordion from "./components/CustomAccordian";
import background from "../src/images/bg-desk.svg";
import mobile from "../src/images/woman-mob.svg";
function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          fontFamily: "unset",
        }}
      >
        <div className="main">
          <Stack style={{ width: "100%" }} className="woman-wrapper">
            <img src={mobile} className="woman-img" />
          </Stack>
          <Stack>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                padding: "1rem",
                fontWeight: "700",
                fontFamily: "unset",
                marginLeft: "1rem",
              }}
            >
              FAQ
            </Typography>
            <Stack sx={{ padding: "1rem" }}>
              <div style={{ fontFamily: "unset" }}>
                <CustomAccordion
                  title="How many team members can I invite?"
                  content="You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
                />
                <CustomAccordion
                  title="What is the maximum file upload size?"
                  content="No more than 2GB. All files in your account must fit your allotted storage space."
                />
                <CustomAccordion
                  title="How do I reset my password?"
                  content="Click “Forgot password” from the login page or “Change password” from your profile page.
                  A reset link will be emailed to you."
                />
                <CustomAccordion
                  title="  Can I cancel my subscription?"
                  content="  Yes! Send us a message and we’ll process your request no questions asked."
                />
                <CustomAccordion
                  title="  Do you provide additional support?"
                  content="Chat and email support is available 24/7. Phone lines are open during normal business hours. "
                />
              </div>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;
