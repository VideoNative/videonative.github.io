/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary');

const Container = CompLibrary.Container;

const CWD = process.cwd();

const versions = require(`${CWD}/versions.json`);

const apiDocPath = 'api-ui-controls';

function Versions(props) {
  const {config: siteConfig} = props;
  const latestVersion = versions[0];
  const repoUrl = `https://github.com/${siteConfig.organizationName}/${siteConfig.projectName}`;
  return (
    <div className="docMainWrapper wrapper">
      <Container className="mainContainer versionsContainer">
        <div className="post">
          <header className="postHeader">
            {/* <h1>{siteConfig.title} Versions</h1> */}
            <h1>版本发布信息</h1>
          </header>
          {/* <p>New versions of this project are released every so often.</p> */}
          {/* <h3 id="latest">Current version (Stable)</h3> */}
          <h3 id="latest">最新版本</h3>
          <table className="versions">
            <tbody>
              <tr>
                <th>{latestVersion}</th>
                <td>
                  {/* You are supposed to hange this hrcef where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:id" */}
                  <a
                    href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                      props.language ? props.language + '/' : ''
                    }${apiDocPath}`}>
                    Documentation
                  </a>
                </td>
                {/* <td>
                  <a href="">Release Notes</a>
                </td> */}
              </tr>
            </tbody>
          </table>
          <h3 id="archive">历史版本</h3>
          <p>您可在此查看曾经发布的历史版本.</p>
          <table className="versions">
            <tbody>
              {versions.map(
                version =>
                  version !== latestVersion && (
                    <tr key={version}>
                      <th>{version}</th>
                      <td>
                        {/* You are supposed to change this href where appropriate
                        Example: href="<baseUrl>/docs(/:language)/:version/:id" */}
                        <a
                          href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                            props.language ? props.language + '/' : ''
                          }${version}/${apiDocPath}`}>
                          Documentation
                        </a>
                      </td>
                      <td>
                        {/* <a href={`${repoUrl}/releases/tag/v${version}`}>
                          Release Notes
                        </a> */}
                        <a href={`${siteConfig.baseUrl}${siteConfig.docsUrl}/${
                          props.language ? props.language + '/' : ''
                          }version-index`}>
                            Release Notes
                        </a>
                      </td>
                    </tr>
                  ),
              )}
            </tbody>
          </table>
          <p>
            {/* You can find past versions of this project on{' '}
            <a href={repoUrl}>GitHub</a>. */}
          </p>
        </div>
      </Container>
    </div>
  );
}

module.exports = Versions;
