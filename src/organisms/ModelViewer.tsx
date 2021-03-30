import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledModelViewer = styled.div``;

type ModelViewerProps = {
  modelId: string;
};

const ModelViewer = ({ modelId }: ModelViewerProps) => {
  const viewerIframeRef = useRef(null);

  useEffect(() => {
    let client = new window.Sketchfab(viewerIframeRef.current);
    client.init(modelId, {
      success: () => {},
      error: () => {
        console.log('viewer error');
      }
    });
  }, []);

  return (
    <StyledModelViewer>
      <iframe
        // We feed the ref to the iframe component to get the underlying DOM object
        ref={viewerIframeRef}
        title='sketchfab-viewer'
        style={{ height: 400, width: 600 }}
      />
    </StyledModelViewer>
  );
};

export default ModelViewer;
