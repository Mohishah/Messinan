import Layouts from "@/src/layouts/Layouts";
import { Form, Formik } from 'formik';
import { Alert } from "../lib/alert";

const Contact = (props) => {

  return (
    <Layouts>
      {/* contact */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
          <div className="row justify-content-between mil-mb-90 mt-5 pt-5">
              <div className="col-xl-5">

                  <h3 className="mil-link mil-appearance mil-accent mil-mb-30">تماس با ما</h3>
                  <h4 className="mil-mb-60 mil-appearance">برقراری ارتباط با ما</h4>

              </div>
              <div className="col-xl-6">

                  <div className="row mil-mt-55-adapt">

                      {props.contact.map((item, key) => (
                      <div className="col-lg-6" key={`contact-item-${key}`}>
                          <div className="mil-icon-box mil-box-hori mil-appearance mil-mb-30">
                              <div className="mil-icon mil-accent">
                                  <img src={item.icon} alt={item.label} />
                              </div>
                              <div className="mil-icon-box-text">
                                  <h6>{item.value}</h6>
                                  <p>{item.label}</p>
                              </div>
                          </div>
                      </div>
                      ))}

                  </div>

              </div>
          </div>
          <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'ضروری میباشد';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'ایمیل وارد شده معتبر نیست';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch("http://127.0.0.1:8000/contact/", {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.status === 200) {
                        Alert('با تشکر' ,'درخواست شما دریافت شد', 'success');
                        form.reset()
                    } else {
                        Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
                    }
                }).catch(error => {
                    Alert('متاسفانه' ,'متاسفانه مشکلی رخ داده است', 'error');
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <Form id="contactForm">
              <div className="row align-items-center">
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="text"
                            name="name" 
                            required="required" 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                          />
                          <label className="mil-link">نام و نام خانوادگی*</label>
                          <span></span>
                          <em>{errors.name && touched.name && errors.name}</em>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <input 
                            className="mil-link" 
                            type="email" 
                            name="email"
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                          />
                          <label className="mil-link">ایمیل*</label>
                          <span></span>
                          <em>{errors.email && touched.email && errors.email}</em>
                      </div>
                  </div>
                  <div className="col-lg-12">
                      {/* email field */}
                      <div className="mil-styled-input mil-appearance mil-hidden-trigger mil-mb-30">
                          <textarea 
                            name="message"
                            className="mil-link" 
                            required="required"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                          />
                          <label className="mil-link">متن پیام</label>
                          <span></span>
                          <em>{errors.message && touched.message && errors.message}</em>
                      </div>
                  </div>
                  <div className="col-lg-6">
                      <button type="submit" className="mil-float-right mil-button mil-button-lg mil-scale-down-trigger mil-dark-trigger mil-mb-30" disabled={isSubmitting}>
                        <span>ارسال پیام</span>
                      </button>
                  </div>
              </div>
          </Form>
          )}
          </Formik>
      </div>
      {/* contact end */}

      {/* map */}
      <div className="mil-map-frame">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18737.626654165902!2d-79.39321130117438!3d43.64696799680622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2a33d602f%3A0xb22c1fe911a3636b!2sLCBO!5e0!3m2!1suk!2sua!4v1675692409380!5m2!1suk!2sua" 
          width={600} 
          height={450} 
          style={{ border: 0 }} 
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade" 
        />
      </div>
      {/* map end */}
      
    </Layouts>
  );
};
export default Contact;

export async function getStaticProps(){
    const res = await fetch("http://127.0.0.1:8000/contact/")
    const contact = await res.json()
    return {
        props : {
            contact,
        },
        revalidate : 10
    }
  }
