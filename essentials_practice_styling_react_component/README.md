NOTE: VANILA CSS STYLE ARE NOT SCOPED TO COMPONENTS!

![plot](./src/assets/Capture1.PNG)

**CSS Modules**
Rename your css file with '<i>xyz</i><b>.module.css</b>'
and import this file in your component for example <code>import './xyz.module.css'</code>

Ref: <a href="https://css-tricks.com/css-modules-part-1-need/">https://css-tricks.com/css-modules-part-1-need/</a>

**Styled Component**
To install Styled Component
<code>npm install styled-components
or
yarn add styled-components</code>
<a href="https://styled-components.com/docs/basics#installation">https://styled-components.com/docs/basics#installation</a>

<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates">Tagged templates</a>

Example:
<code>
import { styled } from "styled-components";

const ControlContainer = styled.div
    \`display: flex;
    flex-direction: column;
    ...\`;
const Label = styled.label\`....\`;
const Input = styled.input\`.....\`;

      <ControlContainer>
        <p>
          <Label className={emailNotValid ? "invalid" : undefined}>Email</Label>
          <Input
            type="email"
            className={emailNotValid ? "invalid" : undefined}
            onChange={(event) => handleInputChange("email", event.target.value)}
          />
        </p>
        <p>
          <Label className={emailNotValid ? "invalid" : undefined}>Password</Label>
          <Input
            type="password"
            className={passwordNotValid ? "invalid" : undefined}
            onChange={...}
          />
        </p>
      </ControlContainer>
      </div>
</code>
