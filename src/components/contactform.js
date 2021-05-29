/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Button } from '../../design-system/button';

import { TextInput, TextArea } from '../../design-system/textinput';

export const ContactForm = () => (
  <div style={{ width: '100%' }}>
    <form
      style={{ maxWidth: '400px', margin: '40px auto' }}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <TextInput type="text" name="name" label="Name" isRequired />
      <TextInput type="email" name="email" label="Email" isRequired />
      <TextInput type="tel" name="phone" label="Phone" />
      <TextArea name="message" label="Message" isRequired />
      <input type="hidden" name="form-name" value="contact" />
      <Button type="submit" label="Submit" weight="primary" />
    </form>
  </div>
);
