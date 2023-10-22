'use client';

import { WEB_3_FORMS_ACCESS_KEY } from '@/constants';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
  phone: string;
  message: string;
};

export const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<
    'default' | 'submitting' | 'success' | 'error'
  >('default');

  const isSubmitted = formState === 'success' || formState === 'error';

  const isLoading = formState === 'submitting';

  const form = useForm<FormValues>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (values) => {
    if (isLoading) {
      return;
    }

    setFormState('submitting');

    const data = {
      ...values,
      access_key: WEB_3_FORMS_ACCESS_KEY,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data, null, 2),
      });
      const json = await res.json();

      if (json.success) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  return (
    <div>
      <div>
        <h2 className="heading-6">Let&#x27;s work together</h2>
        <p className="paragraph-6">
          Get a free tax review for your commercial property
        </p>
      </div>
      {!isSubmitted && (
        <form
          id="email-form"
          className="form-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-layout-grid grid">
            <div id="w-node-_96684179-3191-d52e-88cc-e64db9c9f918-2067b183">
              <input
                type="text"
                className="w-input"
                data-name="First Name"
                placeholder="First Name*"
                {...form.register('firstName', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
              <input
                type="email"
                className="w-input"
                data-name="Email"
                placeholder="Email*"
                {...form.register('email', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
              <input
                type="text"
                className="w-input"
                data-name="Job Title"
                placeholder="Job Title*"
                {...form.register('jobTitle', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
            </div>
            <div id="w-node-_44dfb7e2-574e-0d86-2998-c65358b9a5df-2067b183">
              <input
                type="text"
                className="w-input"
                data-name="Last Name"
                placeholder="Last Name*"
                {...form.register('lastName', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
              <input
                type="text"
                className="w-input"
                data-name="Company"
                placeholder="Company*"
                {...form.register('company', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
              <input
                type="text"
                className="w-input"
                data-name="Phone"
                placeholder="Phone*"
                {...form.register('phone', {
                  required: true,
                  maxLength: 256,
                })}
                disabled={isLoading}
              />
            </div>
          </div>
          <textarea
            placeholder="How can we help you?*"
            data-name="How can we help you?"
            className="w-input"
            {...form.register('message', {
              required: true,
              maxLength: 5000,
            })}
            style={{
              minHeight: '40px',
              maxHeight: '100px',
              resize: 'vertical',
              width: '100%',
              minWidth: '100%',
            }}
            disabled={isLoading}
          />
          <div className="div-block">
            <button
              type="submit"
              className="submit-button-2 w-button"
              disabled={isLoading}
            >
              {isLoading ? 'Please wait...' : 'Submit'}
            </button>
          </div>
        </form>
      )}
      {formState === 'success' && (
        <div className="w-form-done">
          <div>Thank you! Your submission has been received!</div>
        </div>
      )}
      {formState === 'error' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
          <button
            type="button"
            className="w-button"
            onClick={() => setFormState('default')}
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
};
