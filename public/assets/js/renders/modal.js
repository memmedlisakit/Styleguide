import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../common_components/wt-modal';
import Button from '../common_components/wt-button';
import Input from '../common_components/wt-input';
import Textarea from '../common_components/wt-textarea';


const handleClick = (x) => {
	const modal = (<Modal title="Modal title" size="sm" customClass="wt-modal--fixed" hidden={x} onClose={() => handleClick(true)}>
		<Modal.Body>
			<p className="wt-modal__text wt-modal__text--sm">This will send an email to all the traveler</p>
			<Input label="Subject" placeholder="Subject" />
			<Textarea label="Description" />
		</Modal.Body>
		<Modal.Footer>
			<Button type="primary" className="wt-modal__button--sm wt-modal__button--sm" style={{ float: 'left' }} onClick={() => handleClick(true)}>discard</Button>
			<Button className="wt-modal__button--sm">Message</Button>
		</Modal.Footer>
	</Modal>)
	ReactDOM.render(modal, document.querySelector('.modal_open'));
}

const element = (
	<div className="wt-row" style={{ background: "gray" }}>
		<div className="wt-col-xs-7">
			<Modal title="Modal title" style={{ zIndex: "9" }}>
				<Modal.Body>
					<p className="wt-text wt-text--regular wt-modal__text">This will send an email to all the traveler</p>
					<Input label="Subject" placeholder="Subject" formClass="wt-modal__form" />
					<Textarea label="Description" className="wt-modal__form--textarea" formClass="wt-modal__form" />
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary">discard</Button>
					<Button className="wt-modal__button--right">Message</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-5">
			<Modal title="Modal title" size="sm" style={{ zIndex: "9" }}>
				<Modal.Body>
					<p className="wt-modal__text wt-modal__text--sm">This will send an email to all the traveler.</p>
					<Input label="Subject" placeholder="Subject" formClass="wt-modal__form" />
					<Textarea label="Description" className="wt-modal__form--textarea" formClass="wt-modal__form" />
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary" className="wt-modal__button--left wt-modal__button--sm">discard</Button>
					<Button className="wt-modal__button--right wt-modal__button--sm">Message</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-7">
			<Modal title="Modal title" type="alert" style={{ zIndex: "9" }}>
				<Modal.Body>
					<p className="wt-text wt-text--regular wt-modal__text">Are you sure you want to delete this trip?</p>
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary">cancel</Button>
					<Button type="red" className="wt-modal__button--right">delete</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-5">
			<Modal title="Modal title" type="alert" size="sm" style={{ zIndex: "9" }}>
				<Modal.Body>
					<p className="wt-text wt-text--regular wt-modal__text">Are you sure you want to delete this trip?</p>
				</Modal.Body>
				<Modal.Footer className="wt-modal__footer--sm">
					<Button type="primary" className="wt-modal__button--left wt-modal__button--sm">cancel</Button>
					<Button type="red" className="wt-modal__button--sm">delete</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-6">
			<Modal title="Packages already booked" type="alert" style={{ zIndex: "9" }}>
				<Modal.Body>
					<p className="wt-text wt-text--regular wt-modal__text">
						You cannot switch to simple pricing because you
						already have bookings for your packages.
						You can always delete a package which
						removes it for new participants.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary">Ok</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-6">
			<Modal size="md">
				<Modal.Header title="Initiate US Payout" />
				<Modal.Body>
					<p className="wt-text">
						Make a payout to
					</p>
					<div className="payouts__plain">
						<p className="wt-text wt-text--bold">
							JACK BLACK  <br />
							MAStercard ****1234
						</p>
					</div>
					<Input label="for" placeholder="$ 1,000.00" />
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary"> Cancel</Button>
					<Button type="green" className="wt-modal__button--right"> Initiate Payout</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-4">
			<Modal size="normal" style={{ "textAlign": "center" }}>
				<Modal.Header title="Report" hideCloseButton={true} />
				<Modal.Body>
					<p className="wt-modal__text wt-modal__text--sm">We are preparing your report</p> 
						<div className="spinner">
							<div className="spinner__container">
								<div className="spinner__bounce spinner__bounce--first"></div>
								<div className="spinner__bounce spinner__bounce--second"></div>
								<div className="spinner__bounce spinner__bounce--third"></div>
							</div>
						</div> 
					<p className="wt-modal__text wt-modal__text--sm modal_body_text">
						This might take a while. Click below to receive an email to <a href="#" className="wt-text wt-text--blue">johannes@wetravel.com</a> when it's ready
				</p>
				</Modal.Body>
				<Modal.Footer>
					<Button type="green" className="tw-button wt-button--block">Email me when its ready</Button>
					<br />
					<Button type="primary" className="tw-button wt-button--block">Cancel</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-4">
			<Modal size="normal" style={{ "textAlign": "center" }}>
				<Modal.Header title="Report" hideCloseButton={true} />
				<Modal.Body>
					<div>
						<div className="spinner">
							<div className="spinner__container">
								<i className="wt-icon wt-icon-cloud-download"></i>
							</div>
						</div>
					</div>
					<p className="wt-modal__text wt-modal__text--sm modal_body_text">
						Your report is ready! it should have already started downloading. but if it hasn't you can <a href="#" className="wt-text wt-text--blue wt-text--underline">download it here</a>
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary" className="tw-button wt-button--block">Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-4">
			<Modal size="normal" style={{ "textAlign": "center" }}>
				<Modal.Header title="Report" hideCloseButton={true} />
				<Modal.Body>
					<div>
						<div className="spinner">
							<div className="spinner__container">
								<i className="wt-icon wt-icon-letter"></i>
							</div>
						</div>
					</div>
					<p className="wt-modal__text wt-modal__text--sm modal_body_text">
						We'll send an email to <a href="#" className="wt-text wt-text--blue">johannes@wetravel.com</a>
						as soon as your report is ready to download
				</p>
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary" className="tw-button wt-button--block">Close</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-12">
			<Modal>
				<Modal.Header title="Confoirm Cancelliation" />
				<Modal.Body>
					<p className="wt-modal__text wt-modal__text--sm">
						Stephanie Smith has already paid <span className="wt-text wt-text--bold">$420</span> for
					</p>
					<span className="modal_text_dot"></span>
					<div className="modal_list_text">
						<p className="wt-text wt-text--bold">
							2x Double Room Beach Cabana
							<br />
							<span className="wt-text wt-text--placeholder">	$150 deposit / $1000 ful price per person</span>
						</p>
					</div>
					<div className="clearfix"></div>
					<span className="modal_text_dot"></span>
					<div className="modal_list_text">
						<p className="wt-text wt-text--bold">
							3x Massage on the beach
							<br />
							<span className="wt-text wt-text--placeholder">	$40 per option</span>
						</p>
						<hr />
					</div>
					<div className="clearfix"></div>
					<p className="wt-modal__text wt-modal__text--sm">
						You are cancelling
					</p>
					<span className="modal_text_dot"></span>
					<div className="modal_list_text">
						<p className="wt-text wt-text--bold">
							2x Double Room Beach Cabana
						</p>
					</div>
					<div className="clearfix"></div>
					<span className="modal_text_dot"></span>
					<div className="modal_list_text">
						<p className="wt-text wt-text--bold">
							3x Massage on the beach
						</p>
					
					</div>
					<div className="clearfix"></div>
					<hr />
					<p className="wt-text wt-text--placeholder">
						NOTE: This Cancellation will not automatically issue a refound.
					</p>
					<hr />
					<br/>
				</Modal.Body>
				<Modal.Footer>
					<Button type="primary">Back</Button>
					<Button type="green" className="wt-modal__button--right">Confirm Cancellation</Button>
				</Modal.Footer>
			</Modal>
		</div>
		<div className="wt-col-xs-12">
			<Button type="blue" onClick={() => handleClick(false)}>Open modal</Button>
		</div>
	</div>

)






ReactDOM.render(element, document.querySelector('.react_modal'));