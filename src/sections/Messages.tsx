import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  flex-shrink: 0;
  padding-bottom: 32px;
  background-color: #fff;
  margin-left: 24px;
  flex: 1;
  width: 100%;
  border-radius: 30px;
  position: relative;
  overflow: auto;
  transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);

  @media screen and (max-width: 880px) {
    transform: translateX(100%);
    position: absolute;
    opacity: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    width: 100%;
  }

  .messages-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    display: none;

    @media screen and (max-width: 880px) {
        display: block;
    }
  }

  &.show {
    transform: translateX(0);
    opacity: 1;
    margin-left: 0;
  }

  .projects-section-header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 32px 24px 0 24px;
    background-color:  var(--projects-section);
  }

  .message-box {
    border-top: 1px solid var(--message-box-border);
    padding: 16px;
    display: flex;
    align-items: flex-start;
    width: 100%;

        &:hover {
            background-color: var(--message-box-hover);
            border-top-color: var(--link-color-hover);

            + .message-box {
            border-top-color: var(--link-color-hover);
            }
        }

        img {
            border-radius: 50%;
            object-fit: cover;
            width: 40px;
            height: 40px;
        }
    }

    .message-content {
        padding-left: 16px;
        width: 100%;
    }

    .message-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        .name {
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            color: var(--main-color);
            margin: 0;
        }
    }

        .star-checkbox {
            input {
                opacity: 0;
                position: absolute;
                width: 0;
                height: 0;
            }

            label {
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .dark & {
                color: var(--secondary-color);



                input:checked + label {
                color: var(--star);
                }
            }

        input:checked + label svg {
            fill: var(--star);
            transition: .2s;
        }
    }

    .message-line {
        font-size: 14px;
        line-height: 20px;
        margin: 8px 0;
        color: var(--secondary-color);
        opacity: .7;

        &.time {
            text-align: right;
            margin-bottom: 0;
        }
    }

`

const Messages: React.FC = () => {
  return (
    <Div className="messages-section">
        <button className="messages-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle">
                <circle cx="12" cy="12" r="10" />
                <line x1="15" y1="9" x2="9" y2="15" />
                <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
        </button>

        <div className="projects-section-header">
            <p>Client Messages</p>
        </div>

        <div className="messages">
            <div className="message-box">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />

                <div className="message-content">
                    <div className="message-header">
                        <div className="name">Stephanie</div>
                        <div className="star-checkbox">
                            <input type="checkbox" id="star-1" />
                            <label htmlFor="star-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </label>
                        </div>
                    </div>
                    <p className="message-line">I got your first assignment. It was quite good. 🥳 We can continue with the next assignment.</p>
                    <p className="message-line time">Dec, 12</p>
                </div>
            </div>

            <div className="message-box">
                <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image" />

                <div className="message-content">
                    <div className="message-header">
                        <div className="name">Mark</div>
                            <div className="star-checkbox">
                                <input type="checkbox" id="star-2" />
                                <label htmlFor="star-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </label>
                            </div>
                        </div>
                        <p className="message-line">Hey, can tell me about progress of project? I{"'"}m waiting for your response.</p>
                        <p className="message-line time">Dec, 12</p>
                </div>
            </div>

            <div className="message-box">
                <img src="https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />

                <div className="message-content">
                    <div className="message-header">
                    <div className="name">David</div>
                        <div className="star-checkbox">
                            <input type="checkbox" id="star-3" />
                            <label htmlFor="star-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                            </label>
                        </div>
                    </div>
                    <p className="message-line">Awesome! 🤩 I like it. We can schedule a meeting for the next one.</p>
                    <p className="message-line time">Dec, 12</p>
                </div>
            </div>

            <div className="message-box">
                <img src="https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="profile image" />

                <div className="message-content">
                    <div className="message-header">
                        <div className="name">Jessica</div>
                            <div className="star-checkbox">
                                <input type="checkbox" id="star-4" />
                                <label htmlFor="star-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </label>
                            </div>
                        </div>
                        <p className="message-line">I am really impressed! Can{"'"}t wait to see the final result.</p>
                        <p className="message-line time">Dec, 11</p>
                    </div>
                </div>
            </div>
    </Div>
  )
}

export default Messages
