# User stories and acceptance critireon
**Project:** Adelaide Uni Eats <br>
**Team:** Taishi Morgan, Sam Lotus <br>
**Version:** 1.0  <br>
**Date:**  17/01/2026

---

## Epic 1: Authentication (FR-01)
**Story 1.1: Sign Up and Verification:** As a student, I want to sign up using my university email to access the platform.

**AC:**
* Only Adelaide University emails are accepted
* Verification email is sent
* Platform cannot be used untill email is verified

**Story 1.2: Complete Profile:** As a new user, I want to add my name and profile, so I am able to be identified and contacted

**AC:**
* Must enter name and phone number
* cannot request or accept jobs until completed
## Epic 2: Post Jobs (Requester) 
**Story 2.1: Post a Job:** As Sarah (Requester), I want to be able to post a delivery job so someone brings me food.

**AC:**
* Form: pickup location, dropoff location, description, max-price
* Optional: special instructions, delivery fee
* Job appears immediatley on the job board as OPEN

**Story 2.2: View my Jobs:** As Sarah, I want to be able to see my active Jobs and their status

**AC:**
* Shows my jobs and status indicators (OPEN, ACCEPTED, PURCHASED, IN-TRANSIT, DELIVERED)
* Can see the driver details when Job has been accepted.
* If Job is still OPEN, Job can be cancelled.

**Story 2.3: Confirm Delivery:** As Sarah, I want to confirm my delivery to settle the delivery and pay the driver

**AC:**
* "Confirm" button only available following status == DELIVERED.
* Payment is released from Escrow to driver.
* Job is marked as COMPLETED.

## Epic 3: Accept Jobs (Driver) 
**Story 3.1: Browse Jobs:** As Jake (Driver), I want to see available Jobs, so a potential Job can be taken on.

**AC:**
* Shows all of the OPEN jobs.
* Displays: pickup, dropoff, earnings, description
* "Accept" button present on each open job.

**Story 3.2: Accept a Job:** As Jake, I want to be able to accept a Job and earn money.

**AC:**
* Cannot accept Job, if currently two Jobs are already accepted. (FR-03)
* Payment is held in Escrow (FR-02)
* The Job is assigned to my account from the Job Board.
* Requester recieves a notification.

**Story 3.3: Update Job Progess:** As Jake, I want to update the status of the order, to let the requester know of progress.

**AC:**
* Can update status to ACCEPTED, PURCHASED, IN-TRANSIT, DELIVERED.
* Must enter actual price when updating as purchased.
* Requester is notified of updated.


## Epic 4: Communication (FR-04)
**Story 4.1: Chat:** As Sarah or Jake, I want to be able to communicate with the other party to assist in Job coordination.

**AC:**
* Chat unlocks between two parties once Job is accepted (FR-04)
* Real time messaging (Socket.IO)
* Shows unread message indicator.

## Epic 5: Payments (FR-02)
**Story 5.1: Escrow Payment:** As the System, I need to hold the payment when the Job is accepted.

**AC:**
* Payment is held when Job is accepted.
* Payment released when the Requester confirms delivery.
* Payment is refunded if Job is CANCELLED.


