import React, { Fragment } from 'react'

export const FAQ = () => {
  return (
    <Fragment>
      <section>
        <div className="">
          <h1 className="title mt-6 is-4 has-text-centered">FAQs List</h1>
          <table className="table container has-text-centered">
            <thead>
              <tr>
                <th>
                  Questions
                  </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Answers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
<div className='mt-6 container has-text-centered"'>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question Title</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
            </div>

          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Answer</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">

        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">
                Add
        </button>
            </div>
          </div>
        </div>
      </div>
</div>
    </Fragment>
  )
}
