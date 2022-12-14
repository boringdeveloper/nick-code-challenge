import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>Nick Code Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <section>
        <h2 className='section-title'>Notifications</h2>
          <div className='my-1'>
            <div className='notification-info'>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </span>
              <div className='content'>
                <p>A simple primary alert with <a href="#">an example link</a>. Give it a click if you like.</p>
              </div>
              <span className='close-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
          </div>

          <div className='my-1'>
            <div className='notification-success'>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <div className='content'>
                <p>This is a success alert&#8212;check it out!</p>
              </div>
              <span className='close-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
          </div>

          <div className='my-1'>
            <div className='notification-danger'>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </span>
              <div className='content'>
                <p>This is a success alert&#8212;check it out! <a href="#">Fixing it now</a></p>
                <ul>
                  <li>Title is required</li>
                  <li>Salary is required</li>
                  <li>Position Classification is required</li>
                  <li>Skills and knowledge is required</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='my-1'>
            <div className='notification-warning'>
              <span className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </span>
              <div className='content'>
                <p>You should check in on some fields below.</p>
              </div>
              <span className='close-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </div>
          </div>
      </section>
      
      <section>
        <h2 className='section-title'>Buttons</h2>

        <h3>Default</h3>
        <button className='btn-primary btn-rounded mr-1'>
          Primary
        </button>
        <button className='btn-danger btn-rounded'>
          Danger
        </button>

        <h3>Outline</h3>
        <button className='btn-outline-secondary btn-rounded mr-1'>
          Secondary
        </button>
        <button className='btn-outline-danger btn-rounded'>
          Danger
        </button>

        <h3>Disabled</h3>
        <button className='btn-primary btn-rounded mr-1' disabled>
          Primary
        </button>
        <button className='btn-danger btn-rounded mr-1' disabled>
          Danger
        </button>
        <button className='btn-outline-secondary btn-rounded mr-1' disabled>
          Secondary
        </button>
        <button className='btn-outline-danger btn-rounded' disabled>
          Danger
        </button>

        <h3>Controls</h3>
        <div className='mb-1'>
          <button className='btn-outline-default mr-1'>
            <div className='btn-content'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon icon-left'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Settings
            </div>
          </button>
          <button className='icon-button'>
            <div className='btn-content'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
              </svg>
            </div>
          </button>
        </div>
        <div>
          <button className='btn-outline-default mr-1'>
            <div className='btn-content'>
              Actions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon icon-right'>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>
          </button>

          <div className='btn-group'>
            <button className='btn-outline-default'>
              Print
            </button>
            <button className='btn-outline-default'>
              <div className='btn-content'>
                Actions
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon icon-right'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <h3>Segmented Controls</h3>
        <div className='btn-group'>
          <button className='btn-outline-default'>
            All
          </button>
          <button className='btn-outline-default'>
            Manager
          </button>
          <button className='btn-outline-default'>
            Employee
          </button>
        </div>

        <h3>Sizes</h3>
        <button className='btn-outline-default mr-1'>
          <div className='btn-content'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon icon-left'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Default
          </div>
        </button>
        <button className='btn-outline-default btn-small'>
          <div className='btn-content'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='btn-icon icon-left'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Small
          </div>
        </button>
      </section>

      <section>
        <h2 className='section-title'>Fields</h2>
        <div className='row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='basic-field'>Input Field</label>
              <div className='form-input form-control-block'>
                <input type='text' placeholder='start typing ...' className='form-control' id='basic-field'></input>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='read-only'>Readonly</label>
              <div className='form-input form-control-block'>
                <input type='text' value='username-123456' className='form-control' id='read-only' readOnly></input>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='email'>Email address</label>
              <div className='form-input form-control-block'>
                <input type='email' placeholder='name@example.com' className='form-control' id='email'></input>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='disabled'>Disabeld</label>
              <div className='form-input form-control-block'>
                <input type='text' className='form-control' id='disabled' disabled></input>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <div className='form-input form-control-block'>
                <input type='password' className='form-control' id='password'></input>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='prefix'>Prefix</label>
              <div className='form-input prefix form-control-block'>
                <div className='addon'>$</div>
                <input type='text' className='form-control' id='prefix'></input>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='date-picker'>Pick a date</label>
              <div className='form-input suffix'>
                <input type='text' placeholder="dd/mm/yyyy" className='form-control' id='date-picker'></input>
                <div className='addon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='suffix'>Suffix</label>
              <div className='form-input suffix form-control-block'>
                <input type='text' placeholder="Recipient's username" className='form-control' id='suffix'></input>
                <div className='addon separated'>@example.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='time-picker'>Pick a time</label>
              <div className='form-input suffix'>
                <input type='text' placeholder="--:-- --" className='form-control' id='time-picker'></input>
                <div className='addon'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='form-group'>
              <label htmlFor='addon-action'>Addon action</label>
              <div className='form-input action form-control-block'>
                <input type='text' placeholder="Recipient's username" className='form-control' id='addon-action'></input>
                <button className='btn-primary'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
