import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import File from './File';

class FilesList extends Component {
  state = {
    files: [],
    paging: {},
    error: '',
  };

  componentDidMount() {
    this.fetchFiles();
  }

  fetchFiles = () => {
    fetch(`/.netlify/functions/list?token=${this.props.token}`)
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          this.setState({
            files: res.files,
            paging: res.paging,
          });
        }
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  deleteFile = id => {
    fetch(`/.netlify/functions/delete?token=${this.props.token}&file=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.ok) {
          this.fetchFiles();
        } else {
          debugger;
        }
      })
      .catch(err => {
        this.setState({
          error: err.message,
        });
      });
  };

  render() {
    const { files, error } = this.state;

    return (
      <Grid container spacing={3}>
        {error !== '' && <Paper>{error}</Paper>}
        {files.map(file => (
          <Grid item key={file.id}>
            <File
              file={file}
              handleDelete={() => {
                this.deleteFile(file.id);
              }}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default FilesList;
