import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  flex: 2;
  background-color: #fff;
  border-radius: 32px;
  padding: 32px 32px 0 32px;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 520px) {
    overflow: auto;
    padding: 24px 16px 0 16px;

    .projects-section-header p,
    .projects-section-header .time{
        font-size: 18px;
    }
  }

  &-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);

    p {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      opacity: .9;
      margin: 0;
      color: var(--main-color);
    }

    .time {
      font-size: 20px;
    }
  }

    .projects-status {
        display: flex;
    }

    .item-status {
        display: flex;
        flex-direction: column;
        margin-right: 16px;

        &:not(:last-child) .status-type:after {
            content: '';
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translatey(-50%);
            width: 6px;
            height: 6px;
            border-radius: 50%;
            border: 1px solid var(--secondary-color);
        }
    }

    .status-number {
        font-size: 24px;
        line-height: 32px;
        font-weight: 700;
        color: var(--main-color);
        }

        .status-type {
        position: relative;
        padding-right: 24px;
        color: var(--secondary-color);
        }

        .view-actions {
        display: flex;
        align-items: center;
        }


        .view-btn {
        width: 36px;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;
        border-radius: 4px;
        background-color: transparent;
        border: none;
        color: var(--main-color);
        margin-left: 8px;
        transition: .2s;

        &.active {
            background-color: var(--link-color-active-bg);
            color: var(--link-color-active);
        }

        &:not(.active):hover {
            background-color:  var(--link-color-hover);
            color: var(--link-color-active);
        }
    }
`

const Projects: React.FC = () => {
  return (
    <Div className="projects-section">
        <div className="projects-section-header">
            <p>Projects</p>
            <p className="time">December, 12</p>
        </div>

        <div className="projects-section-line">
            <div className="projects-status">
            <div className="item-status">
                <span className="status-number">45</span>
                <span className="status-type">In Progress</span>
            </div>
            <div className="item-status">
                <span className="status-number">24</span>
                <span className="status-type">Upcoming</span>
            </div>
            <div className="item-status">
                <span className="status-number">62</span>
                <span className="status-type">Total Projects</span>
            </div>
            </div>
            <div className="view-actions">
            <button className="view-btn list-view" title="List View">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-list">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
            </button>
            <button className="view-btn grid-view active" title="Grid View">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-grid">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" /></svg>
            </button>
            </div>
        </div>
    </Div>
  )
}

export default Projects
