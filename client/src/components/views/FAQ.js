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
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Question Title</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity" />
            </div>

          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Answer</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">

        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">
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
