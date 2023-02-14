import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Accordion, Badge, Offcanvas as BToc } from 'react-bootstrap';

const Offcanvas = (_p, ref) => {
  const [show, setShow] = useState(false);
  const [dataShow, setDataShow] = useState(null);

  const handleClose = () => {
    setShow(false);
    setDataShow(null);
  };
  const handleShow = () => setShow(true);

  useImperativeHandle(ref, () => ({
    setDataShow,
    handleShow,
  }));

  if (!dataShow) return;

  const {
    episodes,
    duration,
    genres,
    images,
    popularity,
    rank,
    rating,
    season,
    source,
    synopsis,
    status,
    title,
    title_english,
    title_japanese,
  } = dataShow;

  const details = [
    { label: 'Episodes', value: episodes },
    { label: 'Duration', value: duration },
    {
      label: 'Genres',
      value: genres?.map((genre) => (
        <div>
          <Badge>{genre.name}</Badge>
        </div>
      )),
    },
    { label: 'Rank', value: rank },
    { label: 'Popularity', value: popularity },
    { label: 'Season', value: season },
    { label: 'Source', value: source },
  ];

  return (
    <>
      <BToc style={{ width: '50vw' }} show={show} onHide={handleClose} placement="end">
        <BToc.Header closeButton style={{ alignItems: 'flex-start' }}>
          <div>
            <BToc.Title>{title}</BToc.Title>
            <p className="fw-light" style={{ fontSize: '0.9em' }}>
              {title_japanese} {title_english ? <span>| {title_english}</span> : null}
            </p>
          </div>
        </BToc.Header>
        <BToc.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img style={{ width: '100%' }} src={images?.jpg?.large_image_url} />
            </div>
            <div className="col-md-6 col-sm-12">
              <Badge bg="info">{rating}</Badge>
              <p className="fw-lighter mt-1" style={{ fontSize: '0.9em' }}>
                {status}
              </p>

              <div className="mt-1">
                <div className="row" style={{ fontSize: '0.8em' }}>
                  {details.map(({ label, value }) => (
                    <>
                      <div className="col-sm-4">{label}</div>
                      <div className="col-sm-8">
                        <strong>{value}</strong>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Synopsis</Accordion.Header>
                <Accordion.Body>{synopsis}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </BToc.Body>
      </BToc>
    </>
  );
};

export default forwardRef(Offcanvas);
